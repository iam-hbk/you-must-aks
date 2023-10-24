import { prisma } from "@/lib/db";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="max-w-lg">
        <h1 className="text-3xl">AKS something !</h1>
        <Button>Let me ask</Button>
      </div>
    </div>
  );
}
