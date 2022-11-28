import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { DataType } from './@types/contentType';
import { DataMock } from './DataMock';

type DataContextType = [
  data: DataType,
  setData: Dispatch<SetStateAction<DataType>>,
];

type WrapperProps = {
  children: ReactNode | undefined;
};

export const DataContext = createContext<DataContextType>([{}, () => {}]);

export const DataContextWrapper: FC<WrapperProps> = ({ children }) => {
  const [data, setData] = useState<DataType>({});

  useEffect(() => {
    setData(DataMock);
  }, []);

  useEffect(() => {
    console.error(data);
  }, [data]);

  const DataContextValue = useMemo<DataContextType>(
    () => [data, setData],
    [data],
  );
  return (
    <DataContext.Provider value={DataContextValue}>
      {children}
    </DataContext.Provider>
  );
};
