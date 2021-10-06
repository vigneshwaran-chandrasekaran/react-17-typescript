import React, { useEffect, useState } from 'react';

export type BeverageType = {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
};

export const useFetchData = (
  url: string
): { data: BeverageType[] | null; done: boolean } => {
  const [data, dataSet] = useState<BeverageType[] | null>(null);
  const [done, doneSet] = useState<boolean>(false);

  useEffect(() => {
    console.log('useEffect data', data);
  }, [data]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((res: BeverageType[]) => {
        console.log('res', res);
        dataSet(res);
        doneSet(true);
      });
  }, [url]);

  return { data, done };
};

export const CustomHook = () => {
  const { data, done } = useFetchData('/hv-taplist.json');
  console.log('data data s', data);
  return (
    <div>
      <h1>one is one two is two</h1>
      {done && (
        <>
          <table style={{ border: '1px solid red', width: '100%' }}>
            <tbody>
              {data?.map((item: BeverageType, index: number) => (
                <tr key={index}>
                  <td>{item?.abv}</td>
                  <td>{item?.beverageColor}</td>
                  <td>{item?.beverageName}</td>
                  <td>{item?.beverageStyle}</td>
                  <td>{item?.ibu}</td>
                  <td>{item?.level}</td>
                  <td>
                    <img
                      src={item?.logo}
                      alt={item?.name}
                      width="50"
                      height="50"
                    />
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.producerLocation}</td>
                  <td>{item?.producerName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
