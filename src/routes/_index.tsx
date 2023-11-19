import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { ProjectsTable } from '~/components/projects/ProjectsTable';
import { getProjectListByUser } from '~/functions/store/projects';
import type { ProjectList} from '~/functions/store/projects';

export const loader: LoaderFunction<ProjectList> = async ({ context }) => {
	const projects = await getProjectListByUser(context.DB);

	return json(projects);
};

export default function Index() {
	const projects = useLoaderData<ProjectList>();

	return <ProjectsTable projectList={projects} />;
}