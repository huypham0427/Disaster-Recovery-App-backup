export interface ITimecard {
  id: number;
  contractor_id: number;
  site_code: string;
  laborCode: string;
  contractor_name: string;
  total_hours: number;
  laborTotal:number;
  pending: string;

  machineCode: string;
  hoursUsed: number;
  machineTotal: number;
}
