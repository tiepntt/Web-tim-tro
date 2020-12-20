import { ValueScale } from "@devexpress/dx-react-chart";
import {ArgumentAxis, BarSeries, Chart, LineSeries, ValueAxis } from "@devexpress/dx-react-chart-bootstrap4";
import React from "react";

interface Props {
    onTogle?: () => void;
}

interface IDataItem {
    month: string,
    sale: number,
    total: number,
}

const chartData: IDataItem[] = [
    { month: 'Jan', sale: 50, total: 1000 },
    { month: 'Feb', sale: 100, total: 1000 },
    { month: 'March', sale: 30, total: 1100 },

];

export const Statistical = (props: Props) => {
    const {onTogle} = props;
    return (
        <div className="card">
            <Chart
                data={chartData}
            >
                <ValueScale name="sale" />
                <ValueScale name="total" />

                <ArgumentAxis />
                <ValueAxis scaleName="sale" showGrid={false} showLine={true} showTicks={true} />
                <ValueAxis scaleName="total" position="right" showGrid={false} showLine={true} showTicks={true} />

                <BarSeries
                    name="Units Sold"
                    valueField="sale"
                    argumentField="month"
                    scaleName="sale"
                />

                <LineSeries
                    name="Total Transactions"
                    valueField="total"
                    argumentField="month"
                    scaleName="total"
                />
            </Chart>
        </div>

    );
};