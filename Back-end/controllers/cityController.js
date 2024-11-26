import pool from "../config/db.js";

// Create a new city
const registerCity = async (req, res) => {
  const { city_name, country_id } = req.body;

  try {
    const newCityQuery = await pool.query(
      "INSERT INTO cities (city_name, country_id) VALUES ($1, $2) RETURNING *",
      [city_name, country_id]
    );

    const newCity = newCityQuery.rows[0];
    res.status(201).json(newCity);
  } catch (error) {
    console.error("Error creating city:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete a city
const deleteCity = async (req, res) => {
  const { city_id } = req.params;

  try {
    const cityQuery = await pool.query(
      "SELECT * FROM cities WHERE city_id = $1",
      [city_id]
    );

    if (cityQuery.rows.length === 0) {
      return res.status(404).json({ message: "City not found" });
    }

    await pool.query("DELETE FROM cities WHERE city_id = $1", [city_id]);
    res.status(200).json({ message: "Country deleted successfully" });
  } catch (error) {
    console.error("Error deleting city:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Update a city
const updateCity = async (req, res) => {
  const { city_id } = req.params;
  const { city_name, country_id } = req.body;

  try {
    const cityQuery = await pool.query(
      "SELECT * FROM cities WHERE city_id = $1",
      [city_id]
    );

    if (cityQuery.rows.length === 0) {
      return res.status(404).json({ message: "City not found" });
    }

    const updates = [];
    const values = [];

    if (city_name) {
      updates.push(`city_name = $${updates.length + 1}`);
      values.push(city_name);
    }
    if (country_id) {
      updates.push(`country_id = $${updates.length + 1}`);
      values.push(country_id);
    }

    if (updates.length === 0) {
      return res.status(400).json({ message: "No fields to update" });
    }

    values.push(city_id);
    const updateQuery = `UPDATE cities SET ${updates.join(
      ", "
    )} WHERE city_id = $${values.length} RETURNING *`;

    const updatedCityQuery = await pool.query(updateQuery, values);
    const updatedCity = updatedCityQuery.rows[0];

    res.status(200).json(updatedCity);
  } catch (error) {
    console.error("Error updating city:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all cities
const getAllCities = async (req, res) => {
  try {
    const citiesQuery = await pool.query("SELECT * FROM cities");
    res.status(200).json(citiesQuery.rows);
  } catch (error) {
    console.error("Error retrieving cities:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Get city by ID
const getCityById = async (req, res) => {
  const { city_id } = req.params;

  try {
    const cityQuery = await pool.query(
      "SELECT * FROM cities WHERE city_id = $1",
      [city_id]
    );

    if (cityQuery.rows.length === 0) {
      return res.status(404).json({ message: "City not found" });
    }

    res.status(200).json(cityQuery.rows[0]);
  } catch (error) {
    console.error("Error retrieving city:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

export { registerCity, deleteCity, updateCity, getAllCities, getCityById };