import { Nanny } from "@/types/nannies.types";
import { getNannies } from "../(server)/api"
import { NanniesPage } from "../components/NanniesPage/NanniesPage";

export default async function Page() {
  const nannies: Nanny[] = await getNannies();

  return <NanniesPage initialData={nannies} />;
}