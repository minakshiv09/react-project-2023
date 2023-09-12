import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, Bubble, Doughnut, Line, PolarArea, Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Card, Col, Container, Row } from "react-bootstrap";



const Dashboard = () => {
  const [statisticData, setstatisticData] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      const apiResult = await axios.get("http://localhost:6065/chart/all");
      setstatisticData(apiResult.data.slice(0, 9));

      console.log(apiResult.data[0].intensity);
    } catch (error) {
      console.log(error);
    }
  };
  const chartData = {
    labels: statisticData?.map((item) => item.region),
    datasets: [
      {
        label: "Latest Statistics",
        data: statisticData?.map((item) => item.likelihood),
        backgroundColor: ["blue", "yellow"],
        borderColor: ["black"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "50rem", marginTop: "10px" }}>
            <Card.Body>
              <Card.Title>Latest Statistics</Card.Title>

              <Bar
                data={{
                  labels: statisticData?.map((item) => item.intensity),
                  datasets: [
                    {
                      label: "Likelihood Statistics",
                      data: statisticData?.map((item) => item.relevance),
                      backgroundColor: ["blue", "yellow"],
                      borderColor: ["black"],
                      borderWidth: 1,
                    },
                  ],
                }}
              />

              <Line
                data={{
                  labels: statisticData?.map((item) => item.topics),
                  datasets: [
                    {
                      label: "Likelihood Statistics",
                      data: statisticData?.map((item) => item.year),
                      borderColor: ["black"],
                      borderWidth: 1,
                    },
                  ],
                }}
              />

              <Bubble
                data={{
                  labels: statisticData?.map((item) => item.City),
                  datasets: [
                    {
                      label: "Bubble Chart",
                      data: statisticData?.map((item) => ({
                        x: item.region,
                        y: item.likelihood,
                        r: item.radius,
                      })),
                      backgroundColor: "blue",
                      borderColor: "black",
                      borderWidth: 1,
                    },
                  ],
                }}
              />

              <PolarArea
                data={{
                  labels: statisticData?.map((item) => item.region),
                  datasets: [
                    {
                      data: statisticData?.map((item) => item.likelihood),
                      backgroundColor: [
                        "blue",
                        "yellow",
                        "green",
                        "red",
                        "purple",
                      ],
                      borderColor: ["black"],
                      borderWidth: 1,
                    },
                  ],
                }}
              />

              <Radar
                data={{
                  labels: statisticData?.map((item) => item.Intensity),
                  datasets: [
                    {
                      label: "Radar Chart",
                      data: statisticData?.map((item) => item.likelihood),
                      backgroundColor: "blue",
                      borderColor: "black",
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
