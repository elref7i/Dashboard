import { Box, useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
export default function BarChart() {
  const theme = useTheme();
  const data = [
    {
      year: 2019,
      Spain: 900,
      France: 1400,
      Germany: 1700,
      Egypt: 2000,
    },

    {
      year: 2020,
      Spain: 1000,
      France: 1500,
      Germany: 1800,
      Egypt: 1500,
    },

    {
      year: 2021,
      Spain: 1100,
      France: 1600,
      Germany: 1900,
      Egypt: 1700,
    },

    {
      year: 2022,
      Spain: 1200,
      France: 1700,
      Germany: 2000,
      Egypt: 1000,
    },

    {
      year: 2023,
      Spain: 1260,
      France: 1709,
      Germany: 2080,
      Egypt: 400,
    },
    {
      year: 2024,
      Spain: 1260,
      France: 1709,
      Germany: 2080,
      Egypt: 200,
    },
    {
      year: 2025,
      Spain: 1260,
      France: 1709,
      Germany: 2080,
      Egypt: 100,
    },
  ];

  return (
    <Box sx={{ height: '75vh', p: 2 }}>
      <ResponsiveBar
        ///*array of object
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
                stroke: theme.palette.secondary.dark,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.secondary,
                outlineWidth: 0,
                outlineColor: 'transparent',
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.secondary.dark,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.secondary,
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
                fontSize: 11,
                fill: theme.palette.secondary,
                outlineWidth: 0,
                outlineColor: 'transparent',
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.secondary,
              outlineWidth: 0,
              outlineColor: 'transparent',
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.secondary,
                outlineWidth: 0,
                outlineColor: 'transparent',
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
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
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        keys={['Spain', 'France', 'Germany', 'Egypt']}
        indexBy="year"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'paired' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'fries',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'sandwich',
            },
            id: 'lines',
          },
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.5]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 20,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Year',
          legendPosition: 'middle',
          legendOffset: 45,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'slary/month',
          legendPosition: 'middle',
          legendOffset: -45,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
        }
      />
    </Box>
  );
}
