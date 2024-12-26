export function successResponse(message: string, data: any,status: number = 200) {
  return Response.json({ status: "success", message, data }, { status });
}

export function errorResponse(message: string, status: number = 400) {
  return Response.json({ status: "error", message }, { status });
}
