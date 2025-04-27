import { createContext, useContext, useState } from "react";

type uiContextType = {
  projectName: string;
  setProjectName: (name: string) => void;
  projectCount: string;
  setProjectCount: (name: string) => void;
  projectTime: string;
  setProjectTime: (name: string) => void;
  taskName: string;
  setTaskName: (name: string) => void;
};

const UiContext = createContext<uiContextType | undefined>(undefined);

type uiProviderProps = {
  children: React.ReactNode;
};

export const UiProvider = ({ children }: uiProviderProps) => {
  const [projectName, setProjectName] = useState("Today");
  const [projectCount, setProjectCount] = useState("3");
  const [projectTime, setProjectTime] = useState("40m");
  const [taskName, setTaskName] = useState("");
  return (
    <UiContext.Provider value={{ 
    projectName, setProjectName,
    projectCount, setProjectCount,
    projectTime, setProjectTime,
    taskName, setTaskName, 
    }}>
      {children}
    </UiContext.Provider>
  );
};

export const useUi = () => {
  const context = useContext(UiContext);
  if (!context) throw new Error("useUi must be used within a GloabalProvider");
  return context;
};
