import { Request, Response } from 'express';

export type ErrorResponse = Response<{ error: string }>;

/* Languages */
export type Languages = string[];
export type LanguagesResponse = ErrorResponse &
  Response<{
    data: Languages | null;
  }>;

export type QueryParams = {
  lang: string;
  platform: string;
};

/* Utilities */
export type UtilitiesRequest = Request<{}, {}, {}, QueryParams>;
export type UtilitiesResponse = ErrorResponse &
  Response<{
    data: string[] | null;
  }>;

/* Utility */
export type UtilityRequest = Request<{}, {}, {}, QueryParams & { utility: string }>;
export type UtilityResponse = ErrorResponse &
  Response<{
    data: string | null;
  }>;
