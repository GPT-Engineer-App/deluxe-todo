import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-3xl font-bold">Welcome to the Luxury To-Do App</h1>
      <p className="text-lg">Manage your tasks with elegance and efficiency.</p>
      <Button onClick={() => navigate("/login")}>Get Started</Button>
    </main>
  );
}

export default Index;