import type { SkillGroup } from './types';

/** Skill groups. `level` is 1–5 and drives the bar width. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'domain',
    title: 'Domain expertise',
    description: 'Where I have shipped, sold and supported products.',
    skills: [
      { name: 'AEC / BIM / Digital Twin', level: 5 },
      { name: 'CAD/BIM software development', level: 5 },
      { name: '3D web viewers (Hoops, APS Viewer, Three.js)', level: 5 },
      { name: 'CAD file formats (DWG, DGN, IFC, glTF, RVT)', level: 4 },
      { name: 'Plugin dev (AutoCAD, Revit, Inventor, 3ds Max, Maya, Rhino, SketchUp)', level: 4 },
      { name: 'GIS / geospatial (GDAL, ArcGIS, VTS)', level: 4 },
      { name: 'Computational geometry (CGAL, VTK, OpenCascade)', level: 4 },
      { name: 'Point clouds (PCL, PDAL)', level: 3 },
      { name: 'Manufacturing software & PLM integrations', level: 4 },
    ],
  },
  {
    id: 'ai',
    title: 'AI & automation',
    description: 'Practical, production-minded AI for engineering and construction data.',
    skills: [
      { name: 'MCP server development', level: 5 },
      { name: 'Multi-agent systems & LLM orchestration', level: 4 },
      { name: 'AI tool integration (Claude, GitHub Copilot)', level: 5 },
      { name: 'AI-powered CI/CD pipelines', level: 4 },
      { name: 'Autodesk Platform Services / ACC / Forma APIs', level: 5 },
    ],
  },
  {
    id: 'management',
    title: 'Management & delivery',
    description: 'Running teams, numbers and relationships.',
    skills: [
      { name: 'Business unit leadership & P&L', level: 5 },
      { name: 'Requirement discovery & solution shaping', level: 5 },
      { name: 'Client engagement & pre-sales', level: 5 },
      { name: 'Software architecture & design patterns', level: 5 },
      { name: 'Agile / ODC project management (PSM I)', level: 5 },
      { name: 'Hiring, training & knowledge transfer', level: 4 },
      { name: 'Executive & board presentations', level: 5 },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering (hands-on)',
    description: 'Languages and platforms I still write code in.',
    skills: [
      { name: 'C / C++14', level: 5 },
      { name: 'C# / .NET', level: 4 },
      { name: 'JavaScript / TypeScript / React / Node.js', level: 4 },
      { name: 'WebGL / OpenGL / GLSL', level: 5 },
      { name: 'Python', level: 4 },
      { name: 'AWS / Docker / Linux', level: 3 },
    ],
  },
];
