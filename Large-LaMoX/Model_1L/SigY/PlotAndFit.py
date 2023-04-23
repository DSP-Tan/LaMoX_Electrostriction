from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
import pandas as pd

eps_free=8.85418782e-12

stress=[]
eps=[]
file=open("StressPerm.txt","r")
i_str=open("StressPerm.txt","r").readlines()[0].split()[2].strip("sig")


for line in file.readlines()[1:]:
    spline=line.split()
    stress.append(float(spline[1]) )
    # Impose Voight notation.
    eps.append([float(spline[2]), float(spline[6]),float(spline[10]),float(spline[7]),float(spline[4]),float(spline[5])])

print(f'{"Sig" + i_str+" (GPa)":14} {"eps1":10} {"eps2":10} {"eps3":10} {"eps4":10} {"eps5":10} {"eps6":10}')
for i, struss in enumerate(stress):
    print(f"{struss:<14.6} {eps[i][0]:<10.6} {eps[i][1]:<10.6} {eps[i][2]:<10.6} {eps[i][3]:<10.6} {eps[i][4]:<10.6} {eps[i][5]:<10.6}")


# Plotting And Fitting.
eps_plt=[[ep[j] for ep in eps] for j in range(6)]
sig=pd.DataFrame(data=stress,columns=["stress"])
epsDf=pd.DataFrame(data=eps, columns=["eps1","eps2","eps3","eps4","eps5","eps6"])

fmt=["o-",'^--','v:','s-.','2-','*--']
for i, ep in enumerate(eps_plt):
    plt.plot(stress,ep,fmt[i], label=f'$\epsilon_{i+1}$')
plt.legend(bbox_to_anchor=(1.0, 0.85));
plt.xlabel(f"$\sigma_{i_str}$ (GPa)");
plt.ylabel("$\epsilon_0$");

strang=""
strung=""
for i in range(6):
    Mi1_l = (1/2)*(epsDf.iloc[1,i] - epsDf.iloc[0,i]) / (sig.iloc[1]-sig.iloc[0])
    strang+=f"M{i+1}{i_str}: {Mi1_l[0]*eps_free/10**9:8.3e}\n"
plt.text(-0.22,   20.9, strang.rstrip('\n'), bbox=dict(fill=False, edgecolor='red', linewidth=1));

plt.savefig(f"Sig{i_str}.pdf",format="pdf",bbox_inches="tight")
