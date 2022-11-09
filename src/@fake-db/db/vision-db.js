import _ from '@lodash';
import mock from '../mock';
import { db, realDb } from './firebase';

var belongTo = localStorage.getItem('@BELONGTO')
var UID = localStorage.getItem('@UID')

const visionAppDB = {
	widgets: [
		{
			id: 'Vision_IncomeGoals_Averages_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: '',
						color: '',
						align: 'center',
						rowSpan: 2
					},
					{
						id: 'id',
						title: 'Averages Per Item',
						color: '',
						colSpan: 5,
					},
				],
				headers: [
					{id: 'Auto', value: 'Auto', type:false, color: ''},
					{id: 'Fire', value: 'Fire', type:false, color: ''},
					{id: 'Life', value: 'Life', type:false, color: ''},
					{id: 'Health', value: 'Health', type:false, color: ''},
					{id: 'Bank', value: 'Bank', type:false, color: ''},
				],
				rows: [
					{ id: "Average Bonus", value: "Average Bonus", color: "" },
					{ id: "Average Annual Premium", value: "Average Annual Premium", color: "" },
				],
				tableContent: {
					"Average Bonus": {
						'Auto': 0,
						'Fire': 0,
						'Life': 0,
						'Health': 0,
						'Bank': 0,
					},
					"Average Annual Premium": {
						'Auto': 0,
						'Fire': 0,
						'Life': 0,
						'Health': 0,
						'Bank': 0,
					}
				}	
			}	
		},
		{
			id: 'Vision_IncomeGoals_Goals_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'GOALS',
						color: '',
						align: 'center',
						rowSpan: 2
					},
					{
						id: 'policyAndProductGoals',
						title: 'POLICY & PRODUCT GOALS',
						color: '',
						colSpan: 6
					},
					{
						id: 'premiumAndDollarsGoals',
						title: 'PREMIUM & DOLLARS GOALS',
						color: '',
						colSpan: 6
					},
					{
						id: 'otherActivityGoals',
						title: 'OTHER ACTIVY GOALS',
						color: '',
						colSpan: 8
					},					
				],
				headers: [
					{value: 'Auto Policies', type:false, color:''},
					{value: 'Fire Policies', type:false, color:''},	
					{value: 'Life Policies', type:false, color:''},
					{value: 'Health Policies', type:false, color:''},
					{value: 'Bank Products', type:false, color:''},
					{value: 'Total Products', type:false, color:'', readOnly: true},
					{value: 'Annual Auto Premium', type:false, color:'', readOnly: true},
					{value: 'Annual Fire Premium', type:false, color:'', readOnly: true},
					{value: 'Annual Life Premium', type:false, color:'', readOnly: true},
					{value: 'Annual Health Premium', type:false, color:'', readOnly: true},
					{value: 'Agency Bank Comm', type:false, color:'', readOnly: true},
					{value: 'Total Annual Premium', type:false, color:'', readOnly: true},
					{value: 'Multiline Review Appt. Kept', type: false, color: '' },
					{value: 'IFR', type: false, color: '' },
					{value: 'Auto Policies Bought In', type: false, color: '' },
					{value: 'Fire Policies Bought In', type: false, color: '' },
					{value: 'Life Policies Bought In', type: false, color: '' },
					{value: 'Health Policies Bought In', type: false, color: '' },
					{value: 'Bank Documents Bought In', type: false, color: '' },
					{value: 'IFR Completed', type: false, color: '' },
				],
				rows: [
					{ id: "January", value: "January", color: "" },
					{ id: "February", value: "February", color: "" },
					{ id: "March", value: "March", color: "" },
					{ id: "April", value: "April", color: "" },
					{ id: "May", value: "May", color: "" },
					{ id: "June", value: "June", color: "" },
					{ id: "July", value: "July", color: "" },
					{ id: "August", value: "August", color: "" },
					{ id: "September", value: "September", color: "" },
					{ id: "October", value: "October", color: "" },
					{ id: "November", value: "November", color: "" },
					{ id: "December", value: "December", color: "" },
					{ id: "Quarter 1 Totals", value: "Quarter 1 Totals", border: "border-t-4", readOnly: true },
					{ id: "Quarter 2 Totals", value: "Quarter 2 Totals", readOnly: true },
					{ id: "Quarter 3 Totals", value: "Quarter 3 Totals", readOnly: true },
					{ id: "Quarter 4 Totals", value: "Quarter 4 Totals", readOnly: true },
					{ id: "Annual Totals", value: "Annual Totals", border: "border-t-4", readOnly: true },
					{ id: "Projected for Year", value: "Projected for Year", border: "border-t-4", readOnly: true },
				],
				tableContent : {
					"January":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"February":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"March":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"April":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"May":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"June":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"July":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"August":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"September":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"October":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"November":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"December":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"Quarter 1 Totals":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"Quarter 2 Totals":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"Quarter 3 Totals":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"Quarter 4 Totals":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"Annual Totals":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"Projected for Year":{
						'Auto Policies': 0,
						'Fire Policies': 0,	
						'Life Policies': 0,
						'Health Policies': 0,
						'Bank Products': 0,
						'Total Products': 0,
						'Annual Auto Premium': 0,
						'Annual Fire Premium': 0,
						'Annual Life Premium': 0,
						'Annual Health Premium': 0,
						'Agency Bank Comm': 0,
						'Total Annual Premium': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					}						
				},	
			}	
		},		
		{
			id: 'Vision_IncomeGoals_Bonuses_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'BONUSES',
						color: '',
						align: 'center',
						rowSpan: 2
					},
					{
						id: 'initialPoliciAndProductGoals',
						title: 'INITIAL POLICY & PRODUCT GOALS',
						color: '',
						colSpan: 5
					},
					{
						id: 'indivisualTargetBonuses',
						title: 'INDIVIDUAL TARGET BONUSES',
						color: '',
						colSpan: 5
					},
					{
						id: 'otherActivityBonuses',
						title: 'OTHER ACTIVY BONUSES',
						color: '',
						colSpan: 9
					},					
				],
				headers: [
					{ id: 2, value: 'Auto Policy Bonuses', type: false, color: '' }, 
					{ id: 3, value: 'Fire Policy Bonuses', type: false, color: '' },
					{ id: 4, value: 'Life Policy Bonuses', type: false, color: '' },
					{ id: 5, value: 'Health Policy Bonuses', type: false, color: '' },
					{ id: 6, value: 'Bank Product Bonuses', type: false, color: '' },
					{ id: 7, value: 'Individual Auto Target Bonuses', type: false, color: '' },
					{ id: 8, value: 'Individual Fire Target Bonuses', type: false, color: '' },
					{ id: 9, value: 'Individual Life Target Bonuses', type: false, color: '' },
					{ id: 10, value: 'Individual Health Target Bonuses', type: false, color: '' },
					{ id: 11, value: 'Individual Bank Target Bonuses', type: false, color: '' },
					{ id: 12, value: 'Multiline Review Appt. Kept', type: false, color: '' },
					{ id: 13, value: 'IFR', type: false, color: '' },
					{ id: 14, value: 'Auto Policies Bought In', type: false, color: '' },
					{ id: 15, value: 'Fire Policies Bought In', type: false, color: '' },
					{ id: 16, value: 'Life Policies Bought In', type: false, color: '' },
					{ id: 17, value: 'Health Policies Bought In', type: false, color: '' },
					{ id: 18, value: 'Bank Documents Bought In', type: false, color: '' },
					{ id: 19, value: 'IFR Completed', type: false, color: '' },
				],
				rows: [
					{ id: "January", value: "January", color: "" },
					{ id: "February", value: "February", color: "" },
					{ id: "March", value: "March", color: "" },
					{ id: "April", value: "April", color: "" },
					{ id: "May", value: "May", color: "" },
					{ id: "June", value: "June", color: "" },
					{ id: "July", value: "July", color: "" },
					{ id: "August", value: "August", color: "" },
					{ id: "September", value: "September", color: "" },
					{ id: "October", value: "October", color: "" },
					{ id: "November", value: "November", color: "" },
					{ id: "December", value: "December", color: "" },
					{ id: "Quarter 1 Totals", value: "Quarter 1 Totals", border: "border-t-4" },
					{ id: "Quarter 2 Totals", value: "Quarter 2 Totals" },
					{ id: "Quarter 3 Totals", value: "Quarter 3 Totals" },
					{ id: "Quarter 4 Totals", value: "Quarter 4 Totals" },
					{ id: "Annual Totals", value: "Annual Totals", border: "border-t-4" },
					{ id: "Projected for Year", value: "Projected for Year", border: "border-t-4" },
				],
				tableContent : {
					"January":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"February":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"March":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"April":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"May":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"June":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"July":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"August":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"September":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"October":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"November":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"December":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"Quarter 1 Totals":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"Quarter 2 Totals":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"Quarter 3 Totals":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"Quarter 4 Totals":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"Annual Totals":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					},
					"Projected for Year":{
						'Auto Policy Bonuses': 0, 
						'Fire Policy Bonuses': 0,
						'Life Policy Bonuses': 0,
						'Health Policy Bonuses': 0,
						'Bank Product Bonuses': 0,
						'Individual Auto Target Bonuses': 0,
						'Individual Fire Target Bonuses': 0,
						'Individual Life Target Bonuses': 0,
						'Individual Health Target Bonuses': 0,
						'Individual Bank Target Bonuses': 0,
						'Multiline Review Appt. Kept': 0,
						'IFR': 0,
						'Auto Policies Bought In': 0,
						'Fire Policies Bought In': 0,
						'Life Policies Bought In': 0,
						'Health Policies Bought In': 0,
						'Bank Documents Bought In': 0,
						'IFR Completed': 0,
					}						
				},
			}	
		},		
	],
};

mock.onGet('/api/vision-app/vision').reply(() => {
	return [200, visionAppDB.vision];
});

mock.onPost('/api/vision-app/vision/save').reply(request => {
	const data = JSON.parse(request.data);
	let product = data;

	realDb.ref(`Vision/${data.year}/${belongTo}/${UID}`).set({
		Averages: data.Averages,
		Bonuses: data.Bonuses,
		Goals: data.Goals,
	});

	return [200, product];
});

mock.onGet('/api/vision-app/widgets').reply(config => {
	return [200, visionAppDB.widgets];
});
