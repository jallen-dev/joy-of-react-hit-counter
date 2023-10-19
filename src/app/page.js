import React from "react";

import { Reveal } from "../components/Reveal";
import { readFile, writeFile } from "../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

export const dynamic = "force-dynamic";

function Home() {
  const file = readFile(DATABASE_PATH);
  let { hits } = JSON.parse(file);
  hits++;

  const newFile = JSON.stringify({ hits });
  writeFile(DATABASE_PATH, newFile);

  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number <Reveal>{hits}</Reveal>.
      </p>
    </main>
  );
}

export default Home;
