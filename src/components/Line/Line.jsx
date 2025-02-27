import { ResponsiveLine } from '@nivo/line';
import { data } from './data';
import { useTheme } from '@mui/material';
export default function Line() {
  const theme = useTheme();
  return (
    <ResponsiveLine
      data={data}
      curve="catmullRom"
      theme={{
        text: {
          fontSize: 11,
          fill: theme.palette.secondary,
          outlineWidth: 0,
          outlineColor: 'transparent',
        },
        axis: {
          domain: {
            line: {
              stroke: theme.palette.secondary.main,
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 15,
              fill: theme.palette.secondary.main,
              outlineWidth: 0,
              outlineColor: 'transparent',
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.secondary.main,
              strokeWidth: 1,
            },
            text: {
              fontSize: 15,
              fill: theme.palette.secondary.main,
              outlineWidth: 0,
              outlineColor: 'transparent',
            },
          },
        },
        grid: {
          line: {
            stroke: '#dddddd',
            strokeWidth: 0,
          },
        },
        legends: {
          title: {
            text: {
              fontSize: 15,
              fill: theme.palette.secondary,
              outlineWidth: 0,
              outlineColor: 'transparent',
            },
          },
          text: {
            fontSize: 15,
            fill: theme.palette.secondary,
            outlineWidth: 0,
            outlineColor: 'transparent',
          },
          ticks: {
            line: {},
            text: {
              fontSize: 15,
              fill: theme.palette.secondary,
              outlineWidth: 0,
              outlineColor: 'transparent',
            },
          },
        },
        annotations: {
          text: {
            fontSize: 20,
            fill: theme.palette.secondary.light,
            outlineWidth: 2,
            outlineColor: theme.palette.secondary.dark,
            outlineOpacity: 1,
          },
          link: {
            stroke: theme.palette.info.main,
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: theme.palette.secondary.dark,
            outlineOpacity: 1,
          },
          outline: {
            stroke: theme.palette.info.main,
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: theme.palette.secondary.dark,
            outlineOpacity: 1,
          },
          symbol: {
            fill: theme.palette.info.main,
            outlineWidth: 2,
            outlineColor: theme.palette.secondary.dark,
            outlineOpacity: 1,
          },
        },
        tooltip: {
          wrapper: {},
          container: {
            background: theme.palette.secondary.dark,
            color: theme.palette.secondary.light,
            fontSize: 15,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
