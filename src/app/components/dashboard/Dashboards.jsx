"use server";
import CandidateDashboard from "@/app/components/dashboard/CandidateDashboard";
import AdminDashboard from "@/app/components/dashboard/AdminDashboard";
import TraningCenterDashboard from "@/app/components/dashboard/TraningCenterDashboard";
import * as React from "react";
import {cookies} from "next/headers";
export default async function Dashboards() {
    const type = cookies().get("type");
    const role = atob(type.value);
    switch (role) {
        case "Candidate":
            return <CandidateDashboard/>
        case "Admin":
            return <AdminDashboard/>
        case "Training Center":
            return <TraningCenterDashboard/>
        default:
            return <h1>Dashboard Not Found</h1>
    }
}