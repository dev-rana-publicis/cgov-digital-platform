// <div style="min-width: 310px; height: 400px; margin: 0 auto;" id="NCI-Chart__program-structure"></div>

const id = 'NCI-Chart__program-structure'

function initChart(Chart) {
  new Chart(id, {
    chart: {
      type: 'NCI_pie'
    },
    title: { text: 'Program Structure' },
    subtitle: { text: 'Fiscal Year 2021' },
    series: [{
      name: 'Budget',
      data: [
        { name: 'Research', y: 4592036329, drilldown: 'Research' },
        { name: 'Resource Development', y: 806777921, drilldown: 'Resource Development' },
        { name: 'Cancer Prevention and Control', y: 360412137 },
        { name: 'Program Management and Support', y: 683508849 }
      ]
    }],
    drilldown: {
      series: [
        {
          name: 'Research',
          id: 'Research',
          colors: ['#2DC799', '#ABE9D6', '#229573', '#17644D', '#D5F4EB', '#0B3226'],
          data: [
            ['Childhood Cancer Data Initiative (CCDI)', 49800001],
            ['Cancer Causation', 1355512298],
            ['Detection and Diagnosis Research', 592279727],
            ['Treatment Research', 1536602441],
            ['Cancer Biology', 1057841862]
          ]
        },
        {
          name: 'Resource Development',
          id: 'Resource Development',
          colors: ['#80378B', '#602968', '#B387B9', '#532C68', '#D0B9D7', '#5A4F79', '#DCD5E1', '#995FA2'],
          data: [
            ['Cancer Centers', 563537254],
            ['Research Manpower Development', 213240667],
            ['Buildings and Facilities', 30000000]
          ]
        }
      ]
    }
  });
};

export default {
  id,
  initChart,
};
