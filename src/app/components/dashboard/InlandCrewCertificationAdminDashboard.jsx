
import CommonApplicationList from "@/components/common/CommonApplicationList";
import CountCard from "../candidate/CountCard";
import { cookies } from "next/headers";
import ExamScheduleListing from "@/components/common/ExamScheduleListing";
import Schedule from "@/app/user/dos/admin/mastersetup/examschedules/page";

export default function ApplicationAssessmentOperatorDashboard(searchParams={searchParams}) {
  const type = cookies().get("type");
  const role = atob(type.value);
  return (
    <section className="flex flex-col gap-5 p-2">
      <h1 className="text-black font-bold text-lg">ড্যাশবোর্ড</h1>
      <div className="flex flex-col border shadow rounded">
        <CountCard />
        <ExamScheduleListing searchParams={searchParams} />
        {/* <Schedule searchParams={searchParams} /> */}

      </div>
    </section>
  );
}
