export interface UserObject {
    username: string;
    environment: string;
    role: string;
    jasserver: string;
    error: { message: string };
    userInfo: {
        token: string;
        langPref: string;
        locale: string;
        dateFormat: string;
        dateSeperator: string;
        simpleDateFormat: string;
        decimalFormat: string;
        addressNumber: number;
        alphaName: string;
        appsRelease: string;
        country: string;
        username: string;
    };
    userAuthorized: boolean;
    version: string | null;
    poStringJSON: string | null;
    altPoStringJSON: string | null;
    aisSessionCookie: string;
    adminAuthorized: boolean;
}
//Interface for Order list
export interface getOrdersResponse {
  fs_P43081_W43081A: {
    title: string;
    data: {
      gridData: {
        id: number;
        fullGridId: string;
        titles: {
          col_21: string;
        };
        columnInfo: {
          z_DCTO_21: {
            id: number;
            dataType: number;
            bsvw: boolean;
            title: string;
            visible: boolean;
            longName: string;
            qbeEnabled: boolean;
          };
        };
        rowset: {
          rowIndex: number;
          MOExist: boolean;
          MOInfo: {
            moName: string;
            moKey: string;
          };
          z_DCTO_21: {
            internalValue: string;
            value: string;
          };
        }[];
        summary: {
          records: number;
          moreRecords: boolean;
        };
      };
    };
    errors: any[];
    warnings: any[];
  };
  stackId: number;
  stateId: number;
  rid: string;
  currentApp: string;
  timeStamp: string;
  sysErrors: any[];
}

