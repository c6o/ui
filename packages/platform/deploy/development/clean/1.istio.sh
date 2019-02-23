#! /bin/bash

istioctlpath=$(which istioctl)

if [ -z "$istioctlpath" ]; then
    echo "ERROR: istioctl was not found"
    exit 1
fi

istiopath=$(dirname "$(which "$istioctlpath")")
echo "Using istio at $istiopath"

istoconfig=$(helm template $istiopath/../install/kubernetes/helm/istio \
  --name istio \
  --namespace istio-system \
  --set grafana.enabled=true)

cat <<EOF | kubectl delete -f -
$istoconfig
EOF

kubectl delete namespace istio-system
kubectl delete -f $istiopath/../install/kubernetes/helm/istio/templates/crds.yaml