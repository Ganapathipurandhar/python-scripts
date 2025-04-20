import React from 'react';
import { 
  Cloud, Server, Database, Shield, Network, Globe, Cpu, Layers, Lock, 
  ArrowRightLeft, Workflow, Boxes, Cog, RefreshCw, Zap, Users, BarChart, 
  Radio, Antenna, Router, Smartphone, Tag, Wifi, MessageSquare, Key, 
  FileCode, GitBranch, Container, Gauge, Wrench, HardDrive, Repeat, 
  AlertTriangle, PanelLeft, Landmark, Fingerprint, Webhook
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">IoTtix™ RFID System Architecture</h1>
          <p className="text-xl text-slate-600">Enterprise-Grade IoT Infrastructure on AWS Cloud</p>
        </div>

        {/* Main Architecture Diagram */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <div className="flex flex-col items-center">
            {/* AWS Cloud Container */}
            <div className="border-2 border-blue-200 rounded-xl p-8 w-full bg-gradient-to-br from-blue-50 to-slate-50 relative">
              <div className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 rounded-tl-xl rounded-br-xl flex items-center">
                <Cloud className="mr-2 h-5 w-5" />
                <span className="font-semibold">AWS Cloud</span>
              </div>

              {/* Terraform IaC Banner */}
              <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-2 rounded-tr-xl rounded-bl-xl flex items-center">
                <FileCode className="mr-2 h-5 w-5" />
                <span className="font-semibold">Terraform IaC</span>
              </div>
              
              {/* Region Container */}
              <div className="mt-10 border-2 border-slate-200 rounded-xl p-6 bg-white/80 relative">
                <div className="absolute -top-4 left-6 bg-slate-700 text-white px-3 py-1 rounded-full">
                  <span className="font-medium flex items-center">
                    <Globe className="mr-1 h-4 w-4" />
                    AWS Region
                  </span>
                </div>
                
                {/* VPC Container */}
                <div className="mt-4 border-2 border-green-200 rounded-xl p-6 bg-green-50/30 relative">
                  <div className="absolute -top-3 left-6 bg-green-600 text-white px-3 py-1 rounded-full">
                    <span className="font-medium flex items-center">
                      <Network className="mr-1 h-4 w-4" />
                      VPC
                    </span>
                  </div>

                  {/* Security & Networking Layer */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-center mb-2">
                        <Shield className="h-6 w-6 text-red-600" />
                      </div>
                      <p className="text-xs text-center font-medium">AWS WAF</p>
                      <p className="text-xs text-center text-slate-500">Web Application Firewall</p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-center mb-2">
                        <Globe className="h-6 w-6 text-blue-600" />
                      </div>
                      <p className="text-xs text-center font-medium">API Gateway</p>
                      <p className="text-xs text-center text-slate-500">REST/WebSocket APIs</p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-center mb-2">
                        <Lock className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-xs text-center font-medium">IAM & Security Groups</p>
                      <p className="text-xs text-center text-slate-500">Access Control</p>
                    </div>
                  </div>
                  
                  {/* Multi-AZ Setup */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                    {/* AZ 1 */}
                    <div className="border-2 border-indigo-100 rounded-xl p-4 bg-indigo-50/50 relative">
                      <div className="absolute -top-3 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full">
                        <span className="text-sm font-medium">Availability Zone 1</span>
                      </div>
                      
                      <div className="mt-4 space-y-6">
                        {/* Public Subnet */}
                        <div className="border border-green-200 rounded-lg p-3 bg-green-50/50 mb-4">
                          <h4 className="text-sm font-medium text-green-800 mb-2">Public Subnet</h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="border border-slate-200 rounded p-2 bg-white">
                              <div className="flex items-center justify-center mb-1">
                                <Shield className="h-5 w-5 text-red-500" />
                              </div>
                              <p className="text-xs text-center font-medium">NAT Gateway</p>
                            </div>
                            
                            <div className="border border-slate-200 rounded p-2 bg-white">
                              <div className="flex items-center justify-center mb-1">
                                <Webhook className="h-5 w-5 text-blue-500" />
                              </div>
                              <p className="text-xs text-center font-medium">Load Balancer</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Private Subnet - IoTtix Server */}
                        <div className="border border-blue-200 rounded-lg p-3 bg-blue-50/50">
                          <h4 className="text-sm font-medium text-blue-800 mb-2">Private Subnet</h4>
                          
                          {/* IoTtix Private Cloud Server */}
                          <div className="border-2 border-orange-200 rounded-lg p-3 bg-orange-50/50 mb-4 relative">
                            <div className="absolute -top-3 left-4 bg-orange-600 text-white px-3 py-1 rounded-md">
                              <span className="text-xs font-medium flex items-center">
                                <Server className="mr-1 h-3 w-3" />
                                IoTtix™ Private Cloud Server (EC2)
                              </span>
                            </div>
                            
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                              {/* Authentication & Security */}
                              <div className="border border-slate-200 rounded p-2 bg-white">
                                <div className="flex items-center justify-center mb-1">
                                  <Key className="h-5 w-5 text-purple-500" />
                                </div>
                                <p className="text-xs text-center font-medium">Keycloak</p>
                                <p className="text-[10px] text-center text-slate-500">Identity & Access Management</p>
                              </div>
                              
                              {/* Message Broker */}
                              <div className="border border-slate-200 rounded p-2 bg-white">
                                <div className="flex items-center justify-center mb-1">
                                  <MessageSquare className="h-5 w-5 text-green-500" />
                                </div>
                                <p className="text-xs text-center font-medium">Kafka</p>
                                <p className="text-[10px] text-center text-slate-500">Event Streaming Platform</p>
                              </div>
                            </div>
                            
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                              {/* Coordination Service */}
                              <div className="border border-slate-200 rounded p-2 bg-white">
                                <div className="flex items-center justify-center mb-1">
                                  <Repeat className="h-5 w-5 text-blue-500" />
                                </div>
                                <p className="text-xs text-center font-medium">Zookeeper</p>
                                <p className="text-[10px] text-center text-slate-500">Distributed Coordination</p>
                              </div>
                              
                              {/* Database */}
                              <div className="border border-slate-200 rounded p-2 bg-white">
                                <div className="flex items-center justify-center mb-1">
                                  <Database className="h-5 w-5 text-yellow-500" />
                                </div>
                                <p className="text-xs text-center font-medium">MongoDB</p>
                                <p className="text-[10px] text-center text-slate-500">NoSQL Database</p>
                              </div>
                            </div>
                            
                            {/* Microservices Container */}
                            <div className="mt-4 border border-blue-300 rounded-lg p-2 bg-blue-50/70">
                              <div className="flex items-center mb-2">
                                <Container className="h-4 w-4 text-blue-600 mr-1" />
                                <p className="text-xs font-medium text-blue-800">Microservices (Docker Containers)</p>
                              </div>
                              
                              <div className="grid grid-cols-3 gap-2">
                                <div className="bg-white rounded px-2 py-1 border border-slate-200">
                                  <p className="text-[10px] text-center">RFID Stream Processor</p>
                                </div>
                                <div className="bg-white rounded px-2 py-1 border border-slate-200">
                                  <p className="text-[10px] text-center">Event Handler</p>
                                </div>
                                <div className="bg-white rounded px-2 py-1 border border-slate-200">
                                  <p className="text-[10px] text-center">API Service</p>
                                </div>
                                <div className="bg-white rounded px-2 py-1 border border-slate-200">
                                  <p className="text-[10px] text-center">Rules Engine</p>
                                </div>
                                <div className="bg-white rounded px-2 py-1 border border-slate-200">
                                  <p className="text-[10px] text-center">Cache Manager</p>
                                </div>
                                <div className="bg-white rounded px-2 py-1 border border-slate-200">
                                  <p className="text-[10px] text-center">Alerts Manager</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Additional Services */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                            <div className="border border-slate-200 rounded p-2 bg-white">
                              <div className="flex items-center justify-center mb-1">
                                <Gauge className="h-5 w-5 text-indigo-500" />
                              </div>
                              <p className="text-xs text-center font-medium">RFID RTLS Server</p>
                              <p className="text-[10px] text-center text-slate-500">Real-Time Location System</p>
                            </div>
                            
                            <div className="border border-slate-200 rounded p-2 bg-white">
                              <div className="flex items-center justify-center mb-1">
                                <Cpu className="h-5 w-5 text-teal-500" />
                              </div>
                              <p className="text-xs text-center font-medium">NCX Virtual Edge</p>
                              <p className="text-[10px] text-center text-slate-500">Edge Computing Service</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* AZ 2 (Redundancy) */}
                    <div className="border-2 border-indigo-100 rounded-xl p-4 bg-indigo-50/50 relative">
                      <div className="absolute -top-3 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full">
                        <span className="text-sm font-medium">Availability Zone 2 (Failover)</span>
                      </div>
                      
                      <div className="mt-4 space-y-6">
                        {/* Public Subnet */}
                        <div className="border border-green-200 rounded-lg p-3 bg-green-50/50 mb-4">
                          <h4 className="text-sm font-medium text-green-800 mb-2">Public Subnet</h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="border border-slate-200 rounded p-2 bg-white">
                              <div className="flex items-center justify-center mb-1">
                                <Shield className="h-5 w-5 text-red-500" />
                              </div>
                              <p className="text-xs text-center font-medium">NAT Gateway</p>
                            </div>
                            
                            <div className="border border-slate-200 rounded p-2 bg-white">
                              <div className="flex items-center justify-center mb-1">
                                <Webhook className="h-5 w-5 text-blue-500" />
                              </div>
                              <p className="text-xs text-center font-medium">Load Balancer</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Private Subnet - Standby Services */}
                        <div className="border border-blue-200 rounded-lg p-3 bg-blue-50/50">
                          <h4 className="text-sm font-medium text-blue-800 mb-2">Private Subnet (Standby)</h4>
                          
                          {/* Standby EC2 Instance */}
                          <div className="border-2 border-orange-200 rounded-lg p-3 bg-orange-50/50 mb-4 relative opacity-70">
                            <div className="absolute -top-3 left-4 bg-orange-600 text-white px-3 py-1 rounded-md">
                              <span className="text-xs font-medium flex items-center">
                                <Server className="mr-1 h-3 w-3" />
                                Standby IoTtix™ Server (EC2)
                              </span>
                            </div>
                            
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                              {/* Authentication & Security */}
                              <div className="border border-slate-200 rounded p-2 bg-white">
                                <div className="flex items-center justify-center mb-1">
                                  <Key className="h-5 w-5 text-purple-500" />
                                </div>
                                <p className="text-xs text-center font-medium">Keycloak (Replica)</p>
                              </div>
                              
                              {/* Message Broker */}
                              <div className="border border-slate-200 rounded p-2 bg-white">
                                <div className="flex items-center justify-center mb-1">
                                  <MessageSquare className="h-5 w-5 text-green-500" />
                                </div>
                                <p className="text-xs text-center font-medium">Kafka (Replica)</p>
                              </div>
                            </div>
                            
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                              {/* Coordination Service */}
                              <div className="border border-slate-200 rounded p-2 bg-white">
                                <div className="flex items-center justify-center mb-1">
                                  <Repeat className="h-5 w-5 text-blue-500" />
                                </div>
                                <p className="text-xs text-center font-medium">Zookeeper (Replica)</p>
                              </div>
                              
                              {/* Database */}
                              <div className="border border-slate-200 rounded p-2 bg-white">
                                <div className="flex items-center justify-center mb-1">
                                  <Database className="h-5 w-5 text-yellow-500" />
                                </div>
                                <p className="text-xs text-center font-medium">MongoDB (Replica)</p>
                              </div>
                            </div>
                            
                            {/* Microservices Container */}
                            <div className="mt-4 border border-blue-300 rounded-lg p-2 bg-blue-50/70">
                              <div className="flex items-center mb-2">
                                <Container className="h-4 w-4 text-blue-600 mr-1" />
                                <p className="text-xs font-medium text-blue-800">Microservices (Standby)</p>
                              </div>
                              
                              <div className="grid grid-cols-3 gap-2">
                                <div className="bg-white rounded px-2 py-1 border border-slate-200">
                                  <p className="text-[10px] text-center">RFID Stream Processor</p>
                                </div>
                                <div className="bg-white rounded px-2 py-1 border border-slate-200">
                                  <p className="text-[10px] text-center">Event Handler</p>
                                </div>
                                <div className="bg-white rounded px-2 py-1 border border-slate-200">
                                  <p className="text-[10px] text-center">API Service</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Backup & Recovery */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                            <div className="border border-slate-200 rounded p-2 bg-white">
                              <div className="flex items-center justify-center mb-1">
                                <HardDrive className="h-5 w-5 text-slate-500" />
                              </div>
                              <p className="text-xs text-center font-medium">EBS Volumes</p>
                              <p className="text-[10px] text-center text-slate-500">Persistent Storage</p>
                            </div>
                            
                            <div className="border border-slate-200 rounded p-2 bg-white">
                              <div className="flex items-center justify-center mb-1">
                                <RefreshCw className="h-5 w-5 text-green-500" />
                              </div>
                              <p className="text-xs text-center font-medium">Auto Recovery</p>
                              <p className="text-[10px] text-center text-slate-500">EC2 Instance Recovery</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shared Services */}
                  <div className="mt-6 border-2 border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h3 className="text-base font-semibold text-slate-800 mb-3">Shared AWS Services</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center mb-2">
                          <Database className="h-6 w-6 text-yellow-600" />
                        </div>
                        <p className="text-xs text-center font-medium">S3 Buckets</p>
                        <p className="text-[10px] text-center text-slate-500">Data Storage & Backups</p>
                      </div>
                      
                      <div className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center mb-2">
                          <Landmark className="h-6 w-6 text-blue-600" />
                        </div>
                        <p className="text-xs text-center font-medium">AWS IoT Core</p>
                        <p className="text-[10px] text-center text-slate-500">IoT Device Management</p>
                      </div>
                      
                      <div className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center mb-2">
                          <Fingerprint className="h-6 w-6 text-purple-600" />
                        </div>
                        <p className="text-xs text-center font-medium">Cognito</p>
                        <p className="text-[10px] text-center text-slate-500">User Authentication</p>
                      </div>
                      
                      <div className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center mb-2">
                          <AlertTriangle className="h-6 w-6 text-red-600" />
                        </div>
                        <p className="text-xs text-center font-medium">SNS/SQS</p>
                        <p className="text-[10px] text-center text-slate-500">Notifications & Queuing</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Management & Monitoring */}
                  <div className="mt-6 border-2 border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h3 className="text-base font-semibold text-slate-800 mb-3">Management & Monitoring</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center mb-2">
                          <BarChart className="h-6 w-6 text-purple-600" />
                        </div>
                        <p className="text-xs text-center font-medium">CloudWatch</p>
                        <p className="text-[10px] text-center text-slate-500">Metrics & Logs</p>
                      </div>
                      
                      <div className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center mb-2">
                          <Workflow className="h-6 w-6 text-orange-600" />
                        </div>
                        <p className="text-xs text-center font-medium">CloudTrail</p>
                        <p className="text-[10px] text-center text-slate-500">API Activity Tracking</p>
                      </div>
                      
                      <div className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center mb-2">
                          <Cog className="h-6 w-6 text-slate-600" />
                        </div>
                        <p className="text-xs text-center font-medium">Systems Manager</p>
                        <p className="text-[10px] text-center text-slate-500">Resource Management</p>
                      </div>
                      
                      <div className="border border-slate-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center mb-2">
                          <GitBranch className="h-6 w-6 text-teal-600" />
                        </div>
                        <p className="text-xs text-center font-medium">CodePipeline</p>
                        <p className="text-[10px] text-center text-slate-500">CI/CD Pipeline</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* External Connections */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Edge Devices */}
                <div className="border-2 border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="text-base font-semibold text-slate-800 mb-3 flex items-center">
                    <Radio className="mr-2 h-5 w-5 text-blue-600" />
                    RFID Edge Devices
                  </h3>
                  <div className="space-y-3">
                    <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                      <div className="flex items-center mb-2">
                        <Tag className="h-5 w-5 text-blue-600 mr-2" />
                        <p className="text-xs font-medium">Passive UHF RFID Tags</p>
                      </div>
                      <p className="text-[10px] text-slate-500">Asset identification tags with unique IDs</p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                      <div className="flex items-center mb-2">
                        <Antenna className="h-5 w-5 text-green-600 mr-2" />
                        <p className="text-xs font-medium">RFID Antennas & Readers</p>
                      </div>
                      <p className="text-[10px] text-slate-500">Multiple antenna arrays for location tracking</p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                      <div className="flex items-center mb-2">
                        <Cpu className="h-5 w-5 text-indigo-600 mr-2" />
                        <p className="text-xs font-medium">Edge Computing Appliance</p>
                      </div>
                      <p className="text-[10px] text-slate-500">Local data processing and buffering</p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                      <div className="flex items-center mb-2">
                        <Router className="h-5 w-5 text-red-600 mr-2" />
                        <p className="text-xs font-medium">Cradlepoint Router</p>
                      </div>
                      <p className="text-[10px] text-slate-500">Secure connectivity to AWS cloud</p>
                    </div>
                  </div>
                </div>
                
                {/* User Access */}
                <div className="border-2 border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="text-base font-semibold text-slate-800 mb-3 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-blue-600" />
                    User Access
                  </h3>
                  <div className="space-y-3">
                    <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                      <div className="flex items-center mb-2">
                        <Globe className="h-5 w-5 text-indigo-600 mr-2" />
                        <p className="text-xs font-medium">Web Application</p>
                      </div>
                      <p className="text-[10px] text-slate-500">Browser-based RFID management dashboard</p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                      <div className="flex items-center mb-2">
                        <Smartphone className="h-5 w-5 text-purple-600 mr-2" />
                        <p className="text-xs font-medium">Mobile Application</p>
                      </div>
                      <p className="text-[10px] text-slate-500">iOS/Android app for field operations</p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                      <div className="flex items-center mb-2">
                        <PanelLeft className="h-5 w-5 text-yellow-600 mr-2" />
                        <p className="text-xs font-medium">Admin Console</p>
                      </div>
                      <p className="text-[10px] text-slate-500">System configuration and management</p>
                    </div>
                  </div>
                </div>
                
                {/* Integration Partners */}
                <div className="border-2 border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="text-base font-semibold text-slate-800 mb-3 flex items-center">
                    <ArrowRightLeft className="mr-2 h-5 w-5 text-green-600" />
                    Enterprise Integrations
                  </h3>
                  <div className="space-y-3">
                    <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                      <div className="flex items-center mb-2">
                        <Globe className="h-5 w-5 text-blue-600 mr-2" />
                        <p className="text-xs font-medium">Microsoft Entra ID</p>
                      </div>
                      <p className="text-[10px] text-slate-500">Enterprise identity management</p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                      <div className="flex items-center mb-2">
                        <Database className="h-5 w-5 text-blue-600 mr-2" />
                        <p className="text-xs font-medium">SAP Integration</p>
                      </div>
                      <p className="text-[10px] text-slate-500">ERP data synchronization</p>
                    </div>
                    
                    <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                      <div className="flex items-center mb-2">
                        <Globe className="h-5 w-5 text-green-600 mr-2" />
                        <p className="text-xs font-medium">ArcGIS</p>
                      </div>
                      <p className="text-[10px] text-slate-500">Geospatial visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Architecture Components Description */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">IoTtix™ Architecture Components</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                <Server className="mr-2 h-5 w-5 text-orange-600" />
                IoTtix™ Private Cloud Server
              </h3>
              <p className="text-slate-600 text-sm">Core EC2 instance hosting containerized microservices for RFID data processing, event handling, and business logic. Includes Keycloak for authentication, Kafka for messaging, Zookeeper for coordination, and MongoDB for data storage.</p>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                <Container className="mr-2 h-5 w-5 text-blue-600" />
                Microservices Architecture
              </h3>
              <p className="text-slate-600 text-sm">Containerized services managed by Docker, including RFID stream processor, event handler, API service, rules engine, cache manager, and alerts manager. Enables scalable, modular, and maintainable application components.</p>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-green-600" />
                Event-Driven Architecture
              </h3>
              <p className="text-slate-600 text-sm">Kafka-based messaging system for real-time event processing. Enables decoupled, scalable communication between components. Zookeeper provides distributed coordination for Kafka clusters and service discovery.</p>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                <Radio className="mr-2 h-5 w-5 text-blue-600" />
                RFID Edge Infrastructure
              </h3>
              <p className="text-slate-600 text-sm">Passive UHF RFID tags, antennas, readers, and edge computing appliances for data collection. Edge devices process and buffer data locally before secure transmission to the cloud via Cradlepoint routers.</p>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                <Key className="mr-2 h-5 w-5 text-purple-600" />
                Identity & Access Management
              </h3>
              <p className="text-slate-600 text-sm">Keycloak provides authentication, authorization, and user management. Integrates with Microsoft Entra ID for enterprise SSO. AWS IAM and security groups control access to cloud resources.</p>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                <Database className="mr-2 h-5 w-5 text-yellow-600" />
                Data Management
              </h3>
              <p className="text-slate-600 text-sm">MongoDB provides NoSQL database capabilities for flexible data storage. S3 buckets store long-term data, backups, and configuration. Data pipelines enable integration with enterprise systems like SAP and ArcGIS.</p>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-red-600" />
                Security Architecture
              </h3>
              <p className="text-slate-600 text-sm">Multi-layered security with WAF, VPC security groups, IAM policies, and Keycloak. Encrypted data in transit and at rest. Network isolation with public/private subnets and NAT gateways.</p>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                <Network className="mr-2 h-5 w-5 text-green-600" />
                High Availability Design
              </h3>
              <p className="text-slate-600 text-sm">Multi-AZ deployment with active-standby configuration. Load balancers distribute traffic and provide failover. Replicated databases and message brokers ensure data durability and service continuity.</p>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                <FileCode className="mr-2 h-5 w-5 text-emerald-600" />
                Infrastructure as Code
              </h3>
              <p className="text-slate-600 text-sm">Terraform manages AWS infrastructure with declarative configuration files. Enables version-controlled, repeatable deployments. CodePipeline automates build and deployment processes for continuous delivery.</p>
            </div>
          </div>
        </div>
        
        {/* Upgrade Path Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">EC2 Instance Upgrade Strategy</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-3">
              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg mb-6">
                <p className="text-slate-700">The IoTtix™ Private Cloud Server EC2 instance requires upgrades to improve performance, security, and scalability. The following approach ensures minimal downtime and risk.</p>
              </div>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                <Wrench className="mr-2 h-5 w-5 text-blue-600" />
                Infrastructure Upgrades
              </h3>
              <ul className="text-slate-600 text-sm space-y-2 list-disc pl-5">
                <li>Migrate to larger EC2 instance type (e.g., m5.2xlarge to m5.4xlarge)</li>
                <li>Upgrade EBS volumes to gp3 for improved IOPS</li>
                <li>Implement Auto Recovery for EC2 instances</li>
                <li>Add dedicated EFS mount for shared storage</li>
                <li>Implement AWS Backup for automated snapshots</li>
              </ul>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                <Container className="mr-2 h-5 w-5 text-indigo-600" />
                Application Upgrades
              </h3>
              <ul className="text-slate-600 text-sm space-y-2 list-disc pl-5">
                <li>Containerize all services with Docker</li>
                <li>Implement Docker Compose for orchestration</li>
                <li>Upgrade Keycloak to latest version</li>
                <li>Upgrade Kafka and Zookeeper</li>
                <li>Migrate to MongoDB 6.0 with improved performance</li>
                <li>Implement Redis for caching layer</li>
                <li>Upgrade microservices with new features</li>
              </ul>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                <RefreshCw className="mr-2 h-5 w-5 text-green-600" />
                Upgrade Process
              </h3>
              <ul className="text-slate-600 text-sm space-y-2 list-disc pl-5">
                <li>Create AMI of existing EC2 instance</li>
                <li>Provision new EC2 instance with Terraform</li>
                <li>Deploy upgraded containers via CI/CD pipeline</li>
                <li>Perform data migration with minimal downtime</li>
                <li>Implement blue-green deployment for cutover</li>
                <li>Validate with comprehensive testing</li>
                <li>Update DNS and load balancer targets</li>
                <li>Keep old instance as fallback for 48 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;