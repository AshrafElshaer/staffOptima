import { BackButton } from "@/components/back-button";
import { PageTitle } from "@/components/page-title";

export default function OrganizationNewEmailTemplatePage() {
  return (
    <div className="flex flex-col gap-6 flex-1">
      <PageTitle title="Create a new email template to streamline communication for your candidates and hiring team." />
      <BackButton className="w-fit" />
    </div>
  );
}