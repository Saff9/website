'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  FolderGit2, 
  MessageSquare, 
  Settings, 
  LogOut,
  Plus,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  Users,
  BarChart3,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const stats = [
  { label: 'Total Posts', value: '24', change: '+3 this month', icon: FileText },
  { label: 'Total Projects', value: '12', change: '+2 this month', icon: FolderGit2 },
  { label: 'Total Views', value: '45.2K', change: '+12% this month', icon: Eye },
  { label: 'Messages', value: '8', change: '3 unread', icon: Mail },
];

const recentPosts = [
  { id: '1', title: 'Building Scalable Microservices', status: 'published', date: '2024-01-15', views: 1234 },
  { id: '2', title: 'TypeScript Best Practices', status: 'published', date: '2024-01-08', views: 987 },
  { id: '3', title: 'Next.js 14 Deep Dive', status: 'draft', date: '2024-01-05', views: 0 },
  { id: '4', title: 'Database Optimization', status: 'published', date: '2023-12-20', views: 756 },
];

const recentProjects = [
  { id: '1', title: 'Enterprise SaaS Platform', status: 'published', featured: true },
  { id: '2', title: 'AI Analytics Dashboard', status: 'published', featured: true },
  { id: '3', title: 'E-Commerce Microservices', status: 'published', featured: true },
];

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Blog Posts', href: '/admin/posts', icon: FileText },
  { label: 'Projects', href: '/admin/projects', icon: FolderGit2 },
  { label: 'Messages', href: '/admin/messages', icon: MessageSquare },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogout = () => {
    toast.success('Logged out successfully');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-background border-r min-h-screen fixed left-0 top-0">
          <div className="p-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-electric-blue to-electric-violet">
                <span className="text-white text-sm font-bold">JD</span>
              </div>
              <span>Admin</span>
            </Link>
          </div>

          <nav className="px-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.label.toLowerCase()
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
                onClick={() => setActiveTab(item.label.toLowerCase())}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-muted-foreground"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, John!</p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link href="/">
                  View Site
                </Link>
              </Button>
              <Button asChild>
                <Link href="/admin/posts/new">
                  <Plus className="mr-2 h-4 w-4" />
                  New Post
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-emerald-500">{stat.change}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Posts */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Posts</CardTitle>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/admin/posts">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div>
                        <p className="font-medium">{post.title}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.views.toLocaleString()} views</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                          {post.status}
                        </Badge>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Projects */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Projects</CardTitle>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/admin/projects">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div>
                        <p className="font-medium">{project.title}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{project.status}</Badge>
                          {project.featured && (
                            <Badge variant="secondary">Featured</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <Link href="/admin/posts/new">
                    <Plus className="mr-2 h-4 w-4" />
                    New Blog Post
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/admin/projects/new">
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/admin/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Site Settings
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
