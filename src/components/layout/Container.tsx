export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 sm:p-4 md:p-6 lg:p-10 xl:p-12 mx-auto max-w-[1450px]">
      {children}
    </div>
  )
}
