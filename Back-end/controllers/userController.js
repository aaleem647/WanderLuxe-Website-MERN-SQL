const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");

// Register a new user
exports.register = async (req, res) => {
  const { name, email, password, phoneNumber, role } = req.body;

  try {
    // Check if user already exists
    const existingUserQuery = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (existingUserQuery.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create user
    const newUserQuery = await pool.query(
      "INSERT INTO users (name, email, password_hash, phone_number, role) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, email, passwordHash, phoneNumber, role]
    );
    const newUser = newUserQuery.rows[0];
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const userQuery = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (userQuery.rows.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const user = userQuery.rows[0];

    // Check password
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user.user_id }, "your_jwt_secret", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update user
exports.update = async (req, res) => {
  const { userId } = req.params;
  const { name, email, phoneNumber, role } = req.body;

  try {
    // Find existing user
    const userQuery = await pool.query(
      "SELECT * FROM users WHERE user_id = $1",
      [userId]
    );
    if (userQuery.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user
    const updatedUserQuery = await pool.query(
      "UPDATE users SET name = $1, email = $2, phone_number = $3, role = $4 WHERE user_id = $5 RETURNING *",
      [name, email, phoneNumber, role, userId]
    );
    const updatedUser = updatedUserQuery.rows[0];
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete user
exports.delete = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find existing user
    const userQuery = await pool.query(
      "SELECT * FROM users WHERE user_id = $1",
      [userId]
    );
    if (userQuery.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete user
    await pool.query("DELETE FROM users WHERE user_id = $1", [userId]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};