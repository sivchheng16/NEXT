import "../../app/globals.css";

export default function layout({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col gap-4">
          <div>{notifications}</div>
          <div>{revenue}</div>
        </div>
        <div>{users}</div>
      </div>
    </div>
  );
}
