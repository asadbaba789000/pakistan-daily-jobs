import React from 'react';
import {
  Landmark,
  CreditCard,
  Code,
  Wrench,
  GraduationCap,
  HeartPulse,
  DollarSign,
  TrendingUp,
  Users,
  Headphones,
  Building,
  ShieldCheck,
  Truck,
  Award,
  Globe,
  Briefcase
} from 'lucide-react';

interface CategoryIconProps {
  name: string;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Landmark':
      return <Landmark className={className} />;
    case 'CreditCard':
      return <CreditCard className={className} />;
    case 'Code':
      return <Code className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'HeartPulse':
      return <HeartPulse className={className} />;
    case 'DollarSign':
      return <DollarSign className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Headphones':
      return <Headphones className={className} />;
    case 'Building':
      return <Building className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Truck':
      return <Truck className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    default:
      return <Briefcase className={className} />;
  }
};
