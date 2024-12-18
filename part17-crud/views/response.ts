export function successResponse(message: string, data: any) {
  return Response.json({ status: "success", message, data }, { status: 200 });
}

export function errorResponse(message: string, status: number = 400) {
  return Response.json({ status: "error", message }, { status });
}
