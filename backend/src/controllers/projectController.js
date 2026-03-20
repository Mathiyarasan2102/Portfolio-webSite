import asyncHandler from 'express-async-handler';
import Project from '../models/Project.js';

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
    // Pagination
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;

    // Search via Name/Tech stack
    const keyword = req.query.keyword
        ? {
              $or: [
                  { title: { $regex: req.query.keyword, $options: 'i' } },
                  { techStack: { $regex: req.query.keyword, $options: 'i' } },
              ],
          }
        : {};

    const count = await Project.countDocuments({ ...keyword });
    const projects = await Project.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1));

    res.json({ projects, page, pages: Math.ceil(count / pageSize), total: count });
});

// @desc    Fetch single project
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (project) {
        res.json(project);
    } else {
        res.status(404);
        throw new Error('Project not found');
    }
});

// @desc    Create a project
// @route   POST /api/projects
// @access  Private/Admin
const createProject = asyncHandler(async (req, res) => {
    const currentCode = {
        title: 'Sample Project',
        description: 'Sample description',
        imageUrl: '/images/sample.jpg',
        githubLink: '',
        liveLink: '',
        techStack: ['React', 'Node.js'],
    };
    const project = new Project(req.body && req.body.title ? req.body : currentCode);

    const createdProject = await project.save();
    res.status(201).json(createdProject);
});

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private/Admin
const updateProject = asyncHandler(async (req, res) => {
    const { title, description, imageUrl, githubLink, liveLink, techStack, featured } = req.body;

    const project = await Project.findById(req.params.id);

    if (project) {
        project.title = title || project.title;
        project.description = description || project.description;
        project.imageUrl = imageUrl || project.imageUrl;
        project.githubLink = githubLink || project.githubLink;
        project.liveLink = liveLink || project.liveLink;
        project.techStack = techStack || project.techStack;
        project.featured = featured !== undefined ? featured : project.featured;

        const updatedProject = await project.save();
        res.json(updatedProject);
    } else {
        res.status(404);
        throw new Error('Project not found');
    }
});

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
const deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (project) {
        await Project.deleteOne({ _id: project._id });
        res.json({ message: 'Project removed' });
    } else {
        res.status(404);
        throw new Error('Project not found');
    }
});


export { getProjects, getProjectById, createProject, updateProject, deleteProject };
