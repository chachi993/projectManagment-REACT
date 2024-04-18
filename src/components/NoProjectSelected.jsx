import noProjectImage from '../assets/no-projects.png';
import Button from "./Button.jsx";
export default function NoProjectSelected({ onStartAddProject}){
    return (
        <div className="mt-24 text-center w-2/3">
            <img
                src={noProjectImage}
                alt="An empty task list"
                className="w-16 h-16 object-contqain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">No Project Selected</h2>
            <p>Select a project or start a new one</p>
            <p className="mt-8">
                <Button
                    onClick={onStartAddProject}
                >Create new Project
                </Button>
            </p>
        </div>
    );

}