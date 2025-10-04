import { Router } from "express";

const router = Router();

export const getProject = router.get("/", (req, res) => {
  res.json({ message: "Project API" });
});

export const getProjectById = router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Project ID: ${id}` });
});

