import { AppSidebar } from '@/components/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import { Badge } from '../ui/badge'
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react'

export default function Page({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">StreamHub</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Streaming Platforms</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <Separator className="h-px bg-muted/50" />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <h2 className="text-2xl font-bold">Featured Platforms</h2>

          <h3 className="text-1xl font-bold">Smaller</h3>

          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <Card>
              <CardContent>
                <p className="text-sm">sdasdas</p>
                <h3 className="text-lg font-bold">$200</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm">sdasdas</p>
                <h3 className="text-lg font-bold">$200</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm">sdasdas</p>
                <h3 className="text-lg font-bold">$200</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm">sdasdas</p>
                <h3 className="text-lg font-bold">$200</h3>
              </CardContent>
            </Card>
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <Card>
              <CardContent>
                <p className="text-sm">sdasdas</p>
                <h3 className="text-lg font-bold">$200</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm">sdasdas</p>
                <h3 className="text-lg font-bold">$200</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm">sdasdas</p>
                <h3 className="text-lg font-bold">$200</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm">sdasdas</p>
                <h3 className="text-lg font-bold">$200</h3>
              </CardContent>
            </Card>
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <Card>
              <CardContent>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
                <h3 className="pt-3">
                  <Skeleton className="w-[60px] h-[20px]" />
                </h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
                <h3 className="pt-3">
                  <Skeleton className="w-[60px] h-[20px]" />
                </h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
                <h3 className="pt-3">
                  <Skeleton className="w-[60px] h-[20px]" />
                </h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
                <h3 className="pt-3">
                  <Skeleton className="w-[60px] h-[20px]" />
                </h3>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-1xl font-bold">Medium</h3>

          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Card className="">
              <CardHeader>
                <CardTitle>HBO Max</CardTitle>
                <CardDescription>Starting at $14.99/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm">
                  <li>Ad-Free Streaming</li>
                  <li>Exclusive Content</li>
                  <li>Offline Downloads</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Plans</Button>
              </CardFooter>
            </Card>

            <Card className="">
              <CardHeader>
                <CardTitle>HBO Max</CardTitle>
                <CardDescription>Starting at $14.99/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm">
                  <li>Ad-Free Streaming</li>
                  <li>Exclusive Content</li>
                  <li>Offline Downloads</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Plans</Button>
              </CardFooter>
            </Card>

            <Card className="">
              <CardHeader>
                <CardTitle>HBO Max</CardTitle>
                <CardDescription>Starting at $14.99/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm">
                  <li>Ad-Free Streaming</li>
                  <li>Exclusive Content</li>
                  <li>Offline Downloads</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Plans</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Card className="">
              <CardHeader>
                <CardTitle>HBO Max</CardTitle>
                <CardDescription>Starting at $14.99/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm">
                  <li>Ad-Free Streaming</li>
                  <li>Exclusive Content</li>
                  <li>Offline Downloads</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Plans</Button>
              </CardFooter>
            </Card>

            <Card className="">
              <CardHeader>
                <CardTitle>HBO Max</CardTitle>
                <CardDescription>Starting at $14.99/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm">
                  <li>Ad-Free Streaming</li>
                  <li>Exclusive Content</li>
                  <li>Offline Downloads</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Plans</Button>
              </CardFooter>
            </Card>

            <Card className="">
              <CardHeader>
                <CardTitle>HBO Max</CardTitle>
                <CardDescription>Starting at $14.99/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm">
                  <li>Ad-Free Streaming</li>
                  <li>Exclusive Content</li>
                  <li>Offline Downloads</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Plans</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[20px]" />
                </p>
                <h3 className="pt-1">
                  <Skeleton className="w-[200px] h-[10px]" />
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
              </CardContent>
              <CardFooter>
                <Skeleton className="w-full h-[36px]" />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[20px]" />
                </p>
                <h3 className="pt-1">
                  <Skeleton className="w-[200px] h-[10px]" />
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
              </CardContent>
              <CardFooter>
                <Skeleton className="w-full h-[36px]" />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[20px]" />
                </p>
                <h3 className="pt-1">
                  <Skeleton className="w-[200px] h-[10px]" />
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
                <p className="text-sm pt-1">
                  <Skeleton className="w-[100px] h-[10px]" />
                </p>
              </CardContent>
              <CardFooter>
                <Skeleton className="w-full h-[36px]" />
              </CardFooter>
            </Card>
          </div>

          <h3 className="text-1xl font-bold">Medium</h3>

          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <p className="text-lg font-bold">Weekly Top 5</p>
              </CardHeader>
              <CardContent className={'grid grid-row-2 gap-4'}>
                <div className="flex gap-2">
                  <div>01</div>
                  <div className="w-20 h-20 bg-red-500 rounded-2xl">2</div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">Netflix</h3>
                    <p className="text-sm">Starting at $14.99/month</p>
                    <p className="text-sm">Ad-Free Streaming</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>01</div>
                  <div className="w-20 h-20 bg-red-500 rounded-2xl" />
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">Netflix</h3>
                    <p className="text-sm">Starting at $14.99/month</p>
                    <p className="text-sm">Likes </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>01</div>
                  <div className="w-20 h-20 bg-red-500 rounded-2xl">2</div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">Netflix</h3>
                    <p className="text-sm">Starting at $14.99/month</p>
                    <p className="text-sm">Ad-Free Streaming</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-4 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
          <Card className="">
            <CardHeader className="relative">
              <CardDescription>Total Revenue</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl te xt-2xl font-semibold tabular-nums">
                $1,250.00
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <TrendingUpIcon className="size-3" />
                  +12.5%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Trending up this month <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader className="relative">
              <CardDescription>New Customers</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                1,234
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <TrendingDownIcon className="size-3" />
                  -20%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Down 20% this period <TrendingDownIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Acquisition needs attention
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader className="relative">
              <CardDescription>Active Accounts</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                45,678
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <TrendingUpIcon className="size-3" />
                  +12.5%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Strong user retention <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Engagement exceed targets
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader className="relative">
              <CardDescription>Growth Rate</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                4.5%
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <TrendingUpIcon className="size-3" />
                  +4.5%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Steady performance <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Meets growth projections
              </div>
            </CardFooter>
          </Card>
        </div>
        <Separator className="h-px bg-muted/50" />a
      </SidebarInset>
    </SidebarProvider>
  )
}
