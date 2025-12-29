import { Card } from "@/components/ui/card"


const Projects = () => {
  return (
    <>
    <div>
        <h1 className="text-4xl font-bold py-4">My Projects</h1>
    </div>
    <div className="grid grid-cols-4 gap-16 py-4">
        {/* Project 1 */}
        <Card>
        </Card>
        {/* Project 2 */}
        <Card>
        </Card>
        {/* Project 3 */}
        <Card>
        </Card>
        {/* Project 4 */}
        <Card>
        </Card>
    </div>
    </>
  )
}

export default Projects