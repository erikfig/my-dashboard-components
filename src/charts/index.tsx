import ReactApexChart, { Props } from 'react-apexcharts'
import { useEffect, useState } from 'react'

export type ChartsProps = Props & {
  isDarkMode: boolean;
};

export const Charts = ({ options, isDarkMode = false, ...props }: Props) => {
  const [key, setKey] = useState(0)

  const localOptions: Props['options'] = {
    ...options,
    theme: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    chart: {
      background: 'transparent',
      ...options?.chart,
    },
  }

  useEffect(() => {
    setKey(prevKey => prevKey + 1)
  }, [props.type])

  return (
    <div>
      <div id="chart">
        <ReactApexChart key={key} options={localOptions} {...props} />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}