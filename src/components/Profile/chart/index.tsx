import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import {ArgumentAxis, BarSeries, LineSeries, ValueAxis } from "@devexpress/dx-react-chart-bootstrap4";
import { Legend, Title } from "@devexpress/dx-react-chart-material-ui";
import { Chart } from '@devexpress/dx-react-chart-material-ui';

import React from "react";
import "./style.scss";
interface IDataItem {
    month: string,
    sale: number,
    total: number,
}

const chartData: IDataItem[] = [
    { month: 'Thứ 2', sale: 50, total: 0 },
    { month: 'Thứ 3', sale: 100, total: 350 },
    { month: 'Thứ 4', sale: 30, total: 640},
    { month: 'Thứ 5', sale: 107, total: 300},
    { month: 'Thứ 6', sale: 95, total: 100 },
    {month: 'Thứ 7', sale: 150, total: 1000},
    {month: 'Chủ Nhật', sale: 150, total: 1000},
];
export default class Statistical extends React.Component<object, object> {
    public render(): React.ReactNode {
        return (
            <div className="card">
                <Chart
                    data={chartData}
                    width={800}
                    height={600}
                >
                    <ValueScale name="sale" />
                    <ValueScale name="total" />

                    <ArgumentAxis />
                    <ValueAxis scaleName="sale" showGrid={false} showLine={true} showTicks={true} />
                    <ValueAxis scaleName="total" position="right" showGrid={true} showLine={false} showTicks={true}  />

                    <BarSeries
                        name="Người quan tâm"
                        valueField="sale"
                        argumentField="month"
                        scaleName="sale"
                    />

                    <LineSeries
                        name="Lượt truy cập"
                        valueField="total"
                        argumentField="month"
                        scaleName="total"
                    />
                    <Animation />
                    <Legend />
                    <Title text="LƯỢT TRUY CẬP TRONG TUẦN" />
                </Chart>
            </div>
        );
    }
}
