import { Query } from "pg";
import pool from "../config/db";

const getall = async () => {
    const result = await pool. Query ('SELECT * FROM tipos');
    return result. rows ;
}; 