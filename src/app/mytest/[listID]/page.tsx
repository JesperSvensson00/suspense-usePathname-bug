import TestComp from "./TestComp";
import { Suspense } from "react";

type Params = Promise<{ listID: string }>;

// export const experimental_ppr = true;

export interface TestItem {
  id: string;
  name: string;
}

export default async function TrainTranslationPage({
  params,
}: {
  params: Params;
}) {
  const listID = (await params).listID;

  const list: TestItem[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "Test List",
        },
        {
          id: "2",
          name: "Test List 2",
        },
      ]);
    }, 2000);
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <TestComp list={list} id={listID} />
      </div>
    </Suspense>
  );
}
