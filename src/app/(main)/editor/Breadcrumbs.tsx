import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { steps } from "./steps";
import React from "react";

interface Breadcrumbsprops {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

const Breadcrumbs = ({ currentStep, setCurrentStep }: Breadcrumbsprops) => {
  return (
    <div className="flex justify-center">
      <Breadcrumb>
        <BreadcrumbList>
          {steps.map((step) => (
            <React.Fragment key={step.key}>
              <BreadcrumbItem>
                <BreadcrumbLink>
                    {step.key === currentStep ? (
                        <BreadcrumbPage>{step.title}</BreadcrumbPage>
                    ) : (
                        <BreadcrumbLink asChild onClick={() => setCurrentStep(step.key)}>
                            <button>{step.title}</button>
                        </BreadcrumbLink>
                    )}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="last:hidden"/>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
