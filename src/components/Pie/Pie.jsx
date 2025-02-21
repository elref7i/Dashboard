import { useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
export default function Pie() {
  const theme = useTheme();

  const data = [
    {
      id: 'React',
      label: 'React',
      value: 272,
      color: 'hsl(107, 70%, 50%)',
    },
    {
      id: 'stylus',
      label: 'stylus',
      value: 543,
      color: 'hsl(64, 70%, 50%)',
    },
    {
      id: 'sass',
      label: 'sass',
      value: 401,
      color: 'hsl(41, 70%, 50%)',
    },
    {
      id: 'haskell',
      label: 'haskell',
      value: 434,
      color: 'hsl(172, 70%, 50%)',
    },
    {
      id: 'nue',
      label: 'nue',
      value: 333,
      color: 'hsl(219, 70%, 50%)',
    },
  ];
  return (
    <ResponsivePie
      data={data}
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
            strokeWidth: 1,
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
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'ruby',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'c',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'go',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: theme.palette.primary.main,
              },
            },
          ],
        },
      ]}
    />
  );
}
