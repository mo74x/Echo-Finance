import mongoose from "mongoose";
import {
    loadType
} from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);
//monthlyDataSchema
const monthlyDataSchema = new Schema({
    month: {
        type: String,
    },
    revenue: {
        type: mongoose.Types.Currency,
        currency: 'USD',
        get: (v) => v / 100,
    },
    expenses: {
        type: mongoose.Types.Currency,
        currency: 'USD',
        get: (v) => v / 100,
    },
    operationalExpenses: {
        type: mongoose.Types.Currency,
        currency: 'USD',
        get: (v) => v / 100,
    },
    nonOperationalExpenses: {
        type: mongoose.Types.Currency,
        currency: 'USD',
        get: (v) => v / 100,
    }
}, {
    toJSON: {
        getters: true
    }
});
//daylyDataSchema
const dailyDataSchema = new Schema({
    date: {
        type: String,
    },
    revenue: {
        type: mongoose.Types.Currency,
        currency: 'USD',
        get: (v) => v / 100,
    },
    expenses: {
        type: mongoose.Types.Currency,
        currency: 'USD',
        get: (v) => v / 100,
    },
}, {
    toJSON: {
        getters: true
    }
});
//KpiSchema
const KpiSchema = new Schema({
    totalProfit: {
        type: mongoose.Types.Currency,
        currency: 'USD',
        get: (v) => v / 100,
    },
    totalRevenue: {
        type: mongoose.Types.Currency,
        currency: 'USD',
        get: (v) => v / 100,
    },
    totalExpenses: {
        type: mongoose.Types.Currency,
        currency: 'USD',
        get: (v) => v / 100,
    },
    expensesByCategory: {
        type: Map,
        of: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 100,
        }
    },
    monthlyData: [monthlyDataSchema],
    dailyData: [dailyDataSchema]
}, {
    timestamps: true,
    toJSON: {
        getters: true
    }
});
const KPI = mongoose.model('KPI', KpiSchema);
export default KPI;