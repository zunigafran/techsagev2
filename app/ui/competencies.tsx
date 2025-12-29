import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Competencies = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold py-4">My Competencies</h1>
      </div>

      <div className="grid grid-cols-4 gap-16 py-4">
        {/* Comp 1 */}
        <div className="relative">
          <div className="absolute color1" />
          <Card className="w-full h-full grid content-center transition duration-500 hover:scale-110">
            <CardHeader>
              <CardTitle>Cloud Infrastructure & Security</CardTitle>
            </CardHeader>
            <CardContent>
              Demonstrated through AWS/Azure experience, security vulnerability
              remediation, and pipeline engineering across multiple cloud
              platforms.
            </CardContent>
          </Card>
        </div>

        {/* Comp 2 */}
        <div className="relative">
          <div className="absolute color2" />
          <Card className="w-full h-full grid content-center transition duration-500 hover:scale-110">
            <CardHeader>
              <CardTitle>Full-Stack Software Development</CardTitle>
            </CardHeader>
            <CardContent>
              Proven ability building applications with Python, Node.js, React,
              FastAPI, and various frameworks, from frontend to backend
              implementation.
            </CardContent>
          </Card>
        </div>

        {/* Comp 3 */}
        <div className="relative">
          <div className="absolute color3" />
          <Card className="w-full h-full grid content-center transition duration-500 hover:scale-110">
            <CardHeader>
              <CardTitle>Cross-Functional Leadership & Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              Consistent track record coordinating stakeholders, leading
              engineering teams, and managing complex projects across technical
              and business domains.
            </CardContent>
          </Card>
        </div>

        {/* Comp 4 */}
        <div className="relative">
          <div className="absolute color4" />
          <Card className="w-full h-full grid content-center transition duration-500 hover:scale-110">
            <CardHeader>
              <CardTitle>Intelligence & Analytical Problem-Solving</CardTitle>
            </CardHeader>
            <CardContent>
              Unique combination of military intelligence background with
              technical troubleshooting, bringing structured analytical thinking
              to software engineering challenges.
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Competencies