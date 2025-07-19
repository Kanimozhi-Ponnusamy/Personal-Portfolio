import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Chart Data
const data = {
  labels: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'MySQL'],
  datasets: [
    {
      label: 'Skill Level (%)',
      data: [90, 85, 95, 90, 80, 85, 75],
      backgroundColor: [
        '#38bdf8',
        '#facc15',
        '#f97316',
        '#10b981',
        '#6366f1',
        '#ec4899',
        '#14b8a6',
      ],
      borderRadius: 8,
      barThickness: 40,
    },
  ],
};

// Chart Options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.raw}%`,
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#ffffff' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
    y: {
      ticks: { color: '#ffffff' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
  },
};

// React Component
export default function Skills() {
  return (
    <section id="skills" className="py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">My Skills</h2>

        <p className="text-center text-lg max-w-3xl mx-auto mb-10">
          As a passionate front-end developer, I possess a strong foundation in core technologies
          like HTML, CSS, and JavaScript. My expertise extends to modern libraries and frameworks
          including React, Bootstrap, and Tailwind CSS. I am also skilled in working with databases
          such as MySQL, ensuring I can handle both design and data effectively. Below is a visual
          representation of my proficiency levels across various tools and technologies.
        </p>

        <div className="flex justify-center items-center">
          <div className="w-full max-w-3xl h-[400px]">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}
