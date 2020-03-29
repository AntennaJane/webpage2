/// <reference types="react-scripts" />
interface Page {
  parent?: Page
  path: string,
  title: string,
}

type SetPage = React.Dispatch<React.SetStateAction<Page>>

interface SolferinoProps {
  setPage: SetPage,
}
