import Link from "next/link";
import Head from "next/head";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js"


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
);

ChartJS.defaults.font.size = 14

const firstChart = () => {
    return (
        <>

            <Head>
                <title>First Chart</title>
            </Head>

            <div className="md:container  mx-auto flex flex-col">
                <h1 className=" text-2xl text-slate-700 text-center"> Bar Chart</h1>
                <div className="justify-center flex my-5">
                    <Bar
                        height={800}
                        width={1000}
                        options={{
                            resizeDelay: 100,
                            responsive: false,
                            maintainAspectRatio: true,
                            layout: {
                                padding: {
                                    left: 10
                                }
                            },
                            plugins: {
                                legend: {

                                    labels: {
                                        usePointStyle: true,
                                        pointStyle: "rect",
                                        boxHeight: 100,
                                        boxWidth: 40,
                                    },
                                    title: {
                                        display: true,
                                        text: "Hello World"
                                    }

                                }
                            }
                        }}
                        data={
                            {
                                labels: ["Sleep", "Work", "Recreation"],
                                datasets: [
                                    {
                                        label: "Tofu",
                                        data: [10, 2, 24],
                                        backgroundColor: [
                                            'rgba(16 ,185, 129, 0.2)',
                                        ],
                                        borderColor: [
                                            'rgba(16 ,185, 129, 1)',
                                        ],
                                        borderWidth: 1

                                    },
                                    {
                                        label: "Me",
                                        data: [6, 8, 6],
                                        backgroundColor: [
                                            'rgba(16 ,15, 129, 0.2)',
                                        ],
                                        borderColor: [
                                            'rgba(16 ,60, 129, 1)',
                                        ],
                                        borderWidth: 1

                                    },
                                ],
                            }
                        } />
                </div>
                <h2 className="text-blue-400 underline text-center">
                    <Link href="/">
                        <a >Back to Home</a>
                    </Link>
                </h2>

            </div>


        </>
    )

}

export default firstChart;