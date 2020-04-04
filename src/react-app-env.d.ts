/// <reference types="react-scripts" />
interface BroadcastsStage {
  "name": string
}

interface BroadcastsStages {
  [number: string]: BroadcastsStage
}

interface BroadcastsNumber {
  "stage": string,
  "series": string,
  "start": string,
  "time": string,
  "place": string[],
  "name": string[],
  "description": string,
  "thumbComment": string
}

interface BroadcastsNumbers {
  [number: string]: BroadcastsNumber
}

interface Page {
  parent?: Page
  path: string,
  title: string,
}

interface Parameters {
  "storage": {
    "path": string
  }
}

type SetPage = React.Dispatch<React.SetStateAction<Page>>

interface Props {
  parameters: Parameters,
}

interface SolferinoProps extends Props {
  setPage: SetPage,
}
