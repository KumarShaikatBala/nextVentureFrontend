
import CommonApplicationList from "@/components/common/CommonApplicationList";
import CountCard from "../candidate/CountCard";
import { cookies } from "next/headers";

export default function ApplicationAssessmentOperatorDashboard(searchParams={searchParams}) {
  const type = cookies().get("type");
  const role = atob(type.value);
  return (
    <section className="flex flex-col gap-5 p-2">
      <h1 className="text-black font-bold text-lg">ড্যাশবোর্ড</h1>
      <div className="flex flex-col gap-4 border shadow rounded">
        <CountCard />
      
        <CommonApplicationList searchParams={searchParams} role={role} dashboard />
        
       
      </div>
    </section>
  );
}
