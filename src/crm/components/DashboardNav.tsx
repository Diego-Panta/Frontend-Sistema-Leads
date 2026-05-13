// src/crm/components/DashboardNav.tsx

import React, { useState, useEffect } from "react";
import { Menu, X, LayoutDashboard, Users, FileText, UserCheck, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/core/BrandMark";

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const userData = JSON.parse(user);
        setUserName(userData.name);
      } catch (e) {
        console.error("Error parsing user data");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    window.location.href = "/crm/login";
  };

  const navItems = [
    { path: "/crm/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/crm/leads", label: "Leads", icon: FileText },
    { path: "/crm/clients", label: "Clientes", icon: Users },
    { path: "/crm/assignments", label: "Asignaciones", icon: UserCheck },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white shadow-md"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-[#BDBF65]/20 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-[#BDBF65]/20">
            <BrandMark iconSize={32} />
            {userName && (
              <p className="text-sm text-[#2C312D]/70 mt-2 font-medium">
                Hola, {userName}
              </p>
            )}
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-[#2C312D] hover:bg-[#BDBF65]/10 transition-colors"
              >
                <item.icon className="h-5 w-5 text-[#BDBF65]" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="p-4 border-t border-[#BDBF65]/20">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}