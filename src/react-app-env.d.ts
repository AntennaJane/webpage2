/// <reference types="react-scripts" />
interface Page {
  path: string,
  title: string,
}

type SetPages = React.Dispatch<React.SetStateAction<Page[]>>
