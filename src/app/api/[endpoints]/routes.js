import { getProjects, getProjectById, addProject } from '../../../../controllers/projectController';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (id) {
    return getProjectById({ query: { id } });
  }
  
  return getProjects();
}

export async function POST(request) {
  const body = await request.json();
  return addProject({ body });
}